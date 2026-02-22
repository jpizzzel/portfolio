import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import ProjectCard from './project-card'
import watershed from '../public/watershed.png'
import Leg64 from '../public/leg64.png'
import smoosh_bros from '../public/smoosh_bros.jpeg'

const FeaturedProjects = () => {
  const projects = [
    {
      id: 'watershed-ai',
      title: 'Multi System AI Agent',
      description:
        'Automated venture capital research and data enrichment system using multi-agent AI architecture.',
      thumbnail: watershed,
      badges: ['Python', 'Supabase', 'AWS', 'Nextjs'],
      href: '/projects/watershed-ai',
    },
    {
      id: 'arm-legv8-processor',
      title: 'Arm Legv8 Processor',
      description: 'A 64-bit ARM LEGv8 Processor in VHDL',
      thumbnail: Leg64,
      badges: ['VHDL', 'Computer Architecture'],
      href: '/projects/arm-legv8-processor',
    },
    {
      id: 'smoosh-bros',
      title: 'Smoosh Bros',
      description:
        'A Super Smash Bros-style fighting game built entirely in SystemVerilog on an FPGA',
      thumbnail: smoosh_bros,
      badges: ['System Verilog', 'FPGA', 'Game Development'],
      href: '/projects/smoosh-bros',
    },
  ]

  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={6}>
      {projects.map(project => (
        <ProjectCard
          key={project.id}
          href={project.href}
          title={project.title}
          description={project.description}
          thumbnail={project.thumbnail}
          badges={project.badges}
        />
      ))}
    </SimpleGrid>
  )
}

export default FeaturedProjects
