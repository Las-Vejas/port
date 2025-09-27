import * as React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export type CarouselImage = { src: string; alt?: string }

interface ProjectCarouselProps {
  images: CarouselImage[]
  className?: string
}

export function ProjectCarousel({ images, className }: ProjectCarouselProps) {
  if (!images || images.length === 0) return null
  return (
    <div className={className}>
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((img, idx) => (
            <CarouselItem key={idx} className="basis-full">
              <img
                src={img.src}
                alt={img.alt ?? `Slide ${idx + 1}`}
                className="w-full rounded-md object-cover"
                style={{ aspectRatio: '16 / 9' }}
                loading="lazy"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default ProjectCarousel
