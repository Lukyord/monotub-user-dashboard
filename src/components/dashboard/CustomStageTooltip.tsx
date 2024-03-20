type CustomTooltipProps = {
  active?: boolean
  payload?: {
    value: string
    payload: { date: string; mushroomStage: string }
  }[]
  label?: string
}

export function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    const data = payload[0].payload
    return (
      <div
        style={{
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          padding: "10px",
        }}
      >
        <p>Date: {label}</p>
        <p>Mushroom Stage: {data.mushroomStage}</p>
      </div>
    )
  }
  return null
}
