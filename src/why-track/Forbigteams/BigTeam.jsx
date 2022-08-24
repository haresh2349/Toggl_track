import { Box, Heading, SimpleGrid, Image, Show, Button, Text, HStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'

const BigTeam = () => {
  useEffect(() => {
    document.title = "Time Tracking for Freelancers"
  })
  return (
    <Box>
      <Show above='md'>
        <SimpleGrid columns={2} bgColor="#2c1438" >
          <Box m="auto" p="2rem" >
            <Heading fontSize="43.316px" color="#ffffff"  >
              Time Will Tell (If You Track It)
            </Heading>
            <br />
            <Heading fontSize="16.2px" color="#ffffff" >
              Toggl Track is here to save your time—so you can spend it where you want to. That’s our singular focus.
            </Heading>
            <br />
            <Button mr="20%" fontSize="16px" color="#ffffff" bgColor="#e57cd8" borderRadius="50" >
              Sign up for free
            </Button>
          </Box>
          <Box>
            <Image src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/79e1ffc8fb5fba4debd371fb0ef251d8/c4eba/hero-large-teams.avif" alt="" />
          </Box>
        </SimpleGrid>
      </Show>
      <Show below='md'>
        <Box m="auto" p="3rem" bgColor="#2c1438" >
          <Heading textAlign="center" fontSize="43.316px" color="#ffffff"  >
            Accurate, Beautiful Time Tracking. It's Simple.
          </Heading>
          <br />
          <Heading textAlign="center" fontSize="16.2px" color="#ffffff" >
            Toggl Track is here to save your time—so you can spend it where you want to. That’s our singular focus.
          </Heading>
          <br />
          <Box alignContent="center" >
            <Button textAlign="center" fontSize="16px" color="#ffffff" bgColor="#e57cd8" borderRadius="50" >
              Sign up for free
            </Button>
          </Box>
        </Box>
      </Show>
      <Box bgColor="#fef3ed" >
        <Heading fontSize="45.85px" pl="10%" pr="10%" pt="5rem" textAlign="center" color="#2c1438" >
          Save time, manage your team, and plan better. All with just a few clicks.
        </Heading>
        <Text fontSize="16.375px" pl="18%" pr="18%" pt="20px" pb="5rem" textAlign="center" color="#2c1438" >
          Time is the most powerful force in the universe. Toggl Track helps you harness it. Listen closely: your minutes are telling an important story.
        </Text>
      </Box>



      <Show above='md'  >
        <HStack bgColor="#fef3ed"  >
          <Box p="3rem">
            <Image src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/6fd04d0ec899de2f8d6ea8d611c7f55f/b79cb/icon-magnify-dark.avif" alt="" />
            <Heading>Drive discovery with data</Heading>
            <Text>You used to have ideas about where your time goes. Now you have proof. With data-driven insights, Track shows whether your expectations match the reality. Because we only like surprises at birthday parties.</Text>
          </Box>
          <Box>
            <Image src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/c479802bb3dcaa4d05deaa9f2bc7f146/3f0bb/feature-graphs.avif" alt="" />
          </Box>
        </HStack>
      </Show>
      <Show below="md"  >
        <Box bgColor="#fef3ed" >
          <Image src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/c479802bb3dcaa4d05deaa9f2bc7f146/3f0bb/feature-graphs.avif" alt="" />
        </Box>
        <Box p="3rem" bgColor="#fef3ed" >
          <Image src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/6fd04d0ec899de2f8d6ea8d611c7f55f/b79cb/icon-magnify-dark.avif" alt="" />
          <Heading>Drive discovery with data</Heading>
          <Text>You used to have ideas about where your time goes. Now you have proof. With data-driven insights, Track shows whether your expectations match the reality. Because we only like surprises at birthday parties.</Text>
        </Box>
      </Show>
      <SimpleGrid columns={[1, null, 2]}  >
        <Box p="3rem" bgColor="#fef3ed" >
          <Image src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/4903ee711944ad74a04a462a3eee0a89/8fa3d/feature-team-dashboard.avif" alt="" />

        </Box>
        <Box p="3rem" bgColor="#fef3ed" >
          <Image src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/caf89ee4a474d1385ff4afa8f103b2e9/b79cb/icon-calendar-dark.avif" alt="" />
          <Heading>Stay on track, automatically</Heading>
          <Text>Why spend man-hours on admin and compliance? Automate with Track. Whether you're navigating GDPR or your own internal standards—Track has you covered. Track's simple, breezy interface delivers powerful, enterprise-level reporting.</Text>
        </Box>
      </SimpleGrid>
      <Show above='md'  >
        <HStack bgColor="#fef3ed" >
          <Box p="3rem">
            <Image src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/b468810bf2f43552f492da0c744cfdfa/ca913/icon-timeline-dark.avif" alt="" />
            <Heading>Be a well-oiled machine</Heading>
            <Text>Banish "underworked" and "overworked" at once. Analyze your time reports and assign work to those with bandwidth. Estimate timelines and ROI, so your lightweight team packs a heavyweight punch. Because happy teams make clients even happier.</Text>
          </Box>
          <Box>
            <Image src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/b35ef7e54578a8a6eebf590f54353ea3/ce5a6/feature-calendar.avif" alt="" />
          </Box>
        </HStack>
      </Show>
      <Show below="md"  >
        <Box bgColor="#fef3ed" >
          <Image src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/b35ef7e54578a8a6eebf590f54353ea3/ce5a6/feature-calendar.avif" alt="" />
        </Box>
        <Box p="3rem" bgColor="#fef3ed" >
          <Image src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/b468810bf2f43552f492da0c744cfdfa/ca913/icon-timeline-dark.avif" alt="" />
          <Heading>Be a well-oiled machine</Heading>
          <Text>Banish "underworked" and "overworked" at once. Analyze your time reports and assign work to those with bandwidth. Estimate timelines and ROI, so your lightweight team packs a heavyweight punch. Because happy teams make clients even happier.</Text>
        </Box>
      </Show>
      <SimpleGrid columns={[1, null, 2]}  >
        <Box p="3rem" bgColor="#fef3ed"  >
          <Image src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/1d75f67b9bac69fe63a659873978936a/af3f3/feature-time-entries.avif" alt="" />

        </Box>
        <Box p="3rem" bgColor="#fef3ed"  >
          <Image src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/66f27591a1bb8c35eb25b463d69b9073/73ddc/icon-money-dark.avif" alt="" />
          <Heading>Bill better</Heading>
          <Text>To bill, or not to bill? That is the question. Toggl Track is simple to use, so your billing is fast and accurate. Understand the split between billable and non-billable time for everyone on your team, and charge out accurately.</Text>
        </Box>
      </SimpleGrid>
    </Box>
  )
}

export default BigTeam