import { useState } from "react"
import { Container, Box, Button, Input } from "@chakra-ui/react"
import {
  useTracksQuery,
  useCreateTrackMutation,
} from "@/__generated__/graphql-client-api"

function AddTrackForm() {
  const [value, setValue] = useState("initial value")
  const [createTrackResult, createTrack] = useCreateTrackMutation()

  const handleClick = async () => {
    try {
      await createTrack({ content: { title: value } })
      setValue("")
    } catch (error) {
      throw new Error(error)
    }
  }

  return (
    <>
      <Input value={value} onChange={(event) => setValue(event.target.value)} />
      <Button onClick={handleClick}>Add Track</Button>
    </>
  )
}

export default function TrackList() {
  const [result] = useTracksQuery()
  const { data } = result

  return (
    <Container>
      <Box mb={4}>
        <AddTrackForm />
      </Box>
      {data?.tracks.map((track) => (
        <Box mb={2} key={track.id}>
          Title: {track.title}
        </Box>
      ))}
    </Container>
  )
}
