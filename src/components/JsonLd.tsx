type JsonLdProps = {
  data: Record<string, unknown> | Array<Record<string, unknown>>
}

const JsonLd = ({ data }: JsonLdProps) => {
  const items = Array.isArray(data) ? data : [data]

  return (
    <>
      {items.map((item, index) => (
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
          type="application/ld+json"
          key={`jsonld-${index}`}
        />
      ))}
    </>
  )
}

export default JsonLd
