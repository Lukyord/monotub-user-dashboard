import React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

type HighlightProps = {
  title: string
  content: string
  description: string
  icon: React.ReactNode
}

export default function Highlight({
  title,
  content,
  description,
  icon,
}: HighlightProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{content}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
