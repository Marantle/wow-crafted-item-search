import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { GET } from './route'
import { ImageResponse } from '@vercel/og'
import { craftedItemsData, skillBoosters, materials } from '@/data/craftedItems'

// Define a type for our mocked ImageResponse
type MockedImageResponse = Response & {
  element: React.ReactElement;
}

// Mock the ImageResponse
vi.mock('@vercel/og', () => ({
  ImageResponse: vi.fn().mockImplementation((element: React.ReactElement) => {
    const response = new Response(null, { status: 200 }) as MockedImageResponse;
    response.element = element;
    return response;
  }),
}))

// Use the mock base URL from Vitest config
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

describe('OG Image Generation', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should return a 404 response when item is not found', async () => {
    const request = new Request(`${baseUrl}/api/og/999`)
    const response = await GET(request, { params: { id: '999' } })

    expect(response.status).toBe(404)
    expect(await response.text()).toBe('Not Found')
  })

  it('should generate an image response for a valid item', async () => {
    const validItemId = craftedItemsData[0].id.toString()
    const request = new Request(`${baseUrl}/api/og/${validItemId}`)
    const response = await GET(request, { params: { id: validItemId } }) as MockedImageResponse

    expect(ImageResponse).toHaveBeenCalled()
    expect(response.status).toBe(200)
    expect(response.element).toBeDefined()
  })

  it('should include item name in the generated image', async () => {
    const validItemId = craftedItemsData[0].id.toString()
    const request = new Request(`${baseUrl}/api/og/${validItemId}`)
    const response = await GET(request, { params: { id: validItemId } }) as MockedImageResponse

    render(response.element)
    expect(screen.getByText(craftedItemsData[0].name)).toBeInTheDocument()
  })

  it('should include item level in the generated image', async () => {
    const validItemId = craftedItemsData[0].id.toString()
    const request = new Request(`${baseUrl}/api/og/${validItemId}`)
    const response = await GET(request, { params: { id: validItemId } }) as MockedImageResponse

    render(response.element)
    expect(screen.getByText(`Item Level: ${craftedItemsData[0].itemLevel}`)).toBeInTheDocument()
  })

  it('should include embellished quality icon if applicable', async () => {
    const itemWithEmbellished = craftedItemsData.find(item => item.embellishedQuality > 0)
    if (!itemWithEmbellished) {
      throw new Error('No item with embellished quality found for testing')
    }
    const request = new Request(`${baseUrl}/api/og/${itemWithEmbellished.id}`)
    const response = await GET(request, { params: { id: itemWithEmbellished.id.toString() } }) as MockedImageResponse

    render(response.element)
    const embellishedIcon = screen.getByAltText('Embellished quality icon')
    expect(embellishedIcon).toBeInTheDocument()
    expect(embellishedIcon).toHaveAttribute('src', `${baseUrl}/icons/${itemWithEmbellished.embellishedQuality}.png`)
  })

  it('should include missive quality icon if applicable', async () => {
    const itemWithMissive = craftedItemsData.find(item => item.missiveQuality > 0)
    if (!itemWithMissive) {
      throw new Error('No item with missive quality found for testing')
    }
    const request = new Request(`${baseUrl}/api/og/${itemWithMissive.id}`)
    const response = await GET(request, { params: { id: itemWithMissive.id.toString() } }) as MockedImageResponse

    render(response.element)
    const missiveIcon = screen.getByAltText('Missive quality icon')
    expect(missiveIcon).toBeInTheDocument()
    expect(missiveIcon).toHaveAttribute('src', `${baseUrl}/icons/${itemWithMissive.missiveQuality}.png`)
  })

  it('should include all tags for the item', async () => {
    const itemWithTags = craftedItemsData.find(item => item.tags.length > 0)
    if (!itemWithTags) {
      throw new Error('No item with tags found for testing')
    }
    const request = new Request(`${baseUrl}/api/og/${itemWithTags.id}`)
    const response = await GET(request, { params: { id: itemWithTags.id.toString() } }) as MockedImageResponse

    render(response.element)
    itemWithTags.tags.forEach(tag => {
      expect(screen.getByText(tag)).toBeInTheDocument()
    })
  })

  it('should include all required materials', async () => {
    const itemWithMaterials = craftedItemsData[0]
    const request = new Request(`${baseUrl}/api/og/${itemWithMaterials.id}`)
    const response = await GET(request, { params: { id: itemWithMaterials.id.toString() } }) as MockedImageResponse

    render(response.element)
    itemWithMaterials.materials.forEach(material => {
      const materialInfo = materials.find(m => m.id === material.materialId)
      const quantityElements = screen.getAllByText(`${material.quantity}x`)
      expect(quantityElements.length).toBeGreaterThan(0)
      
      const materialName = materialInfo ? materialInfo.name : `Unknown Material (${material.materialId})`
      const materialElement = screen.getByText((content, element) => {
        return element?.tagName.toLowerCase() === 'span' && content.includes(materialName)
      })
      expect(materialElement).toBeInTheDocument()
    })
  })

  it('should include skill booster information if applicable', async () => {
    const itemWithSkillBooster = craftedItemsData.find(item => item.skillBoosterId)
    if (!itemWithSkillBooster) {
      throw new Error('No item with skill booster found for testing')
    }
    const request = new Request(`${baseUrl}/api/og/${itemWithSkillBooster.id}`)
    const response = await GET(request, { params: { id: itemWithSkillBooster.id.toString() } }) as MockedImageResponse

    render(response.element)
    const skillBooster = skillBoosters.find(booster => booster.id === itemWithSkillBooster.skillBoosterId)
    if (!skillBooster) {
      throw new Error('Skill booster not found for the item')
    }
    expect(screen.getByText(`Skill Booster: ${skillBooster.name} (+${skillBooster.skillBonus})`)).toBeInTheDocument()
  })

  it('should not include skill booster information if not applicable', async () => {
    const itemWithoutSkillBooster = craftedItemsData.find(item => !item.skillBoosterId)
    if (!itemWithoutSkillBooster) {
      throw new Error('All items have skill boosters, cannot test for absence')
    }
    const request = new Request(`${baseUrl}/api/og/${itemWithoutSkillBooster.id}`)
    const response = await GET(request, { params: { id: itemWithoutSkillBooster.id.toString() } }) as MockedImageResponse

    render(response.element)
    expect(screen.queryByText(/Skill Booster:/)).not.toBeInTheDocument()
  })
})