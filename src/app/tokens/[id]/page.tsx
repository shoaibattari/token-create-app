
export default function GiveName({ params }: {
  params: { id: string },
}) {
  
    return (
      <div>
            My name is {params.id}.
      </div>
    )
  }