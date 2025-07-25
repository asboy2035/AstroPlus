import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Planet {
  name: string
  temperature: string
  description: string
  image: {
    svg: string
    png: string
  }
}

export const usePlanetStore = defineStore('planets', () => {
  const planets = ref<Planet[]>([
    {
      name: 'Mercury',
      temperature: '430°C',
      description: 'Mercury is the smallest planet in our solar system and nearest to the Sun, it is only slightly larger than Earth\'s Moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter.',
      image: {
        svg: '/icons/mercury.svg',
        png: '/planets/mercury.png'
      }
    },
    {
      name: 'Venus',
      temperature: '471°C',
      description: 'Venus is the second planet from the Sun and is Earth’s closest planetary neighbor. It’s one of the four inner, terrestrial (or rocky) planets, and it’s often called Earth’s twin because it’s similar in size and density.',
      image: {
        svg: '/icons/venus.svg',
        png: '/planets/venus.png'
      }
    },
    {
      name: 'Earth',
      temperature: '16°C',
      description: 'Our home planet is the third planet from the Sun, and the only place we know of so far that’s inhabited by living things. While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface.',
      image: {
        svg: '/icons/earth.svg',
        png: '/planets/earth.png'
      }
    },
    {
      name: 'Mars',
      temperature: '-28°C',
      description: 'Mars is the fourth planet from the Sun – a dusty, cold, desert world with a very thin atmosphere. Mars is also a dynamic planet with seasons, polar ice caps, canyons, extinct volcanoes, and evidence that it was even more active in the past.',
      image: {
        svg: '/icons/mars.svg',
        png: '/planets/mars.png'
      }
    },
    {
      name: 'Jupiter',
      temperature: '-108°C',
      description: 'Jupiter is the fifth planet from our Sun and is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined. Jupiter\'s stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium.',
      image: {
        svg: '/icons/jupiter.svg',
        png: '/planets/jupiter.png'
      }
    },
    {
      name: 'Saturn',
      temperature: '-138°C',
      description: 'Saturn is the sixth planet from the Sun and the second largest planet in our solar system. Adorned with a dazzling system of icy rings, Saturn is unique among the planets. It is not the only planet to have rings, but none are as spectacular or as complex as Saturn\'s.',
      image: {
        svg: '/icons/saturn.svg',
        png: '/planets/saturn.png'
      }
    },
    {
      name: 'Uranus',
      temperature: '-195°C',
      description: 'Uranus is the seventh planet from the Sun, and has the third-largest diameter in our solar system. It was the first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star.',
      image: {
        svg: '/icons/uranus.svg',
        png: '/planets/uranus.png'
      }
    },
    {
      name: 'Neptune',
      temperature: '-201°C',
      description: 'Neptune is a dark, cold, and windy world made mostly of hydrogen, helium, and methane. Often called an ice giant, Neptune has supersonic winds and deep blue clouds, and it was the first planet located through mathematical predictions before being seen through a telescope.',
      image: {
        svg: '/icons/neptune.svg',
        png: '/planets/neptune.png'
      }
    }
  ])
  const selectedPlanet = ref<Planet | null>(null)

  function selectPlanet (planetName: string) {
    selectedPlanet.value = planets.value.find(p => p.name === planetName) || null
  }

  return { planets, selectedPlanet, selectPlanet }
})
