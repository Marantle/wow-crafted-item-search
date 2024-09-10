import { ImageResponse } from "@vercel/og";
import {
  craftedItemsData,
  skillBoosters,
  materials,
} from "@/data/craftedItems";
import { getMaterialIconFilename } from "@/lib/utils";

export const runtime = "edge";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  console.log("GET function called with params:", params);
  console.log("Request URL:", request.url);

  const itemId = parseInt(params.id, 10);
  console.log("Parsed itemId:", itemId);

  const item = craftedItemsData.find(
    (craftedItem) => craftedItem.id === itemId
  );

  console.log("Found item:", item);

  if (!item) {
    console.log("Item not found, returning 404 response");
    return new Response("Not Found", { status: 404 });
  }

  const skillBooster = item.skillBoosterId
    ? skillBoosters.find((booster) => booster.id === item.skillBoosterId)
    : undefined;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  console.log("Generating image for item:", item.name);

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 32,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: 40,
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <h2 style={{ fontSize: 36, fontWeight: "bold", margin: 0 }}>
            {item.name}
          </h2>
          <span style={{ fontSize: 24 }}>
            {item.crafter} ({item.realm})
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            marginBottom: 20,
          }}
        >
          <span
            style={{
              background: "#e2e8f0",
              padding: "5px 10px",
              borderRadius: 5,
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
            }}
          >
            Item Level: {item.itemLevel}
          </span>
          {item.embellishedQuality > 0 && (
            <span
              style={{
                background: "#e2e8f0",
                padding: "5px 10px",
                borderRadius: 5,
                display: "flex",
                alignItems: "center",
              }}
            >
              Embellished:
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 5,
                }}
              >
                <img
                  src={`${baseUrl}/icons/${item.embellishedQuality}.png`}
                  width={item.embellishedQuality === 1 ? "24" : "32"}
                  height={item.embellishedQuality === 1 ? "24" : "32"}
                  alt="Embellished quality icon"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
            </span>
          )}
          {item.missiveQuality > 0 && (
            <span
              style={{
                background: "#e2e8f0",
                padding: "5px 10px",
                borderRadius: 5,
                display: "flex",
                alignItems: "center",
              }}
            >
              Missive:
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 5,
                }}
              >
                <img
                  src={`${baseUrl}/icons/${item.missiveQuality}.png`}
                  width={item.missiveQuality === 1 ? "24" : "32"}
                  height={item.missiveQuality === 1 ? "24" : "32"}
                  alt="Missive quality icon"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
            </span>
          )}
          {item.tags.map((tag, index) => (
            <span
              key={index}
              style={{
                background: "#e2e8f0",
                padding: "5px 10px",
                borderRadius: 5,
                display: "flex",
                alignItems: "center",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", marginBottom: 20 }}
        >
          <h3
            style={{
              fontSize: 28,
              fontWeight: "bold",
              marginBottom: 10,
              margin: 0,
            }}
          >
            Required Materials
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
            {item.materials.map((material, index) => {
              const materialInfo = materials.find(
                (m) => m.id === material.materialId
              );
              return (
                <div
                  key={index}
                  style={{ display: "flex", alignItems: "center", gap: 10 }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: 96,
                      height: 96,
                      display: "flex",
                    }}
                  >
                    <img
                      src={`${baseUrl}/materials/${getMaterialIconFilename(
                        material.materialId
                      )}`}
                      width="96"
                      height="96"
                      alt={`Material: ${
                        materialInfo
                          ? materialInfo.name
                          : `Unknown Material (${material.materialId})`
                      }`}
                      style={{
                        borderRadius: 8,
                        position: "absolute",
                        top: 0,
                        left: 0,
                      }}
                    />
                    {material.quality > 0 && (
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "48px",
                          height: "48px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          background: "rgba(255, 255, 255, 0.7)",
                          borderRadius: "50%",
                        }}
                      >
                        <img
                          src={`${baseUrl}/icons/${material.quality}.png`}
                          width="40"
                          height="40"
                          alt={`Quality ${material.quality}`}
                          style={{
                            objectFit: "contain",
                          }}
                        />
                      </div>
                    )}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: 24,
                      }}
                    >
                      {material.quantity}x
                    </span>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: 20,
                      }}
                    >
                      {materialInfo
                        ? materialInfo.name
                        : `Unknown Material (${material.materialId})`}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {skillBooster && (
          <div style={{ display: "flex", alignItems: "center", fontSize: 24 }}>
            <span style={{ display: "flex", alignItems: "center" }}>
              Skill Booster: {skillBooster.name} (+{skillBooster.skillBonus})
            </span>
          </div>
        )}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
