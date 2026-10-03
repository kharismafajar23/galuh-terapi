import { ImageResponse } from "next/og"

export const alt = "Galuh Terapi - Sentuhan Tradisional & Relaksasi Holistik"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: 80,
          background: "linear-gradient(135deg, #005d42, #047857)",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 34, color: "#9ffdd3" }}>Galuh Terapi</div>
        <div style={{ fontSize: 76, fontWeight: 700, marginTop: 24, lineHeight: 1.1 }}>
          Sehat Badan, Ringan Langkah, Hidup Lebih Bermakna
        </div>
        <div style={{ fontSize: 32, marginTop: 36, color: "#a6f2d1" }}>
          Pijat, Bekam, Totok Punggung, Terapi Energi - Pajangan, Bantul
        </div>
      </div>
    ),
    size
  )
}
