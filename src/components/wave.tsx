"use client"

import { FC, useEffect, useRef } from 'react'

import { useCanvasContext } from '@/app/hook/useCanvas'
import useResponsiveSize from '@/app/hook/useResponsiveSize'
import WaveEntity from '@/app/entity/WaveEntity'
import useColor from '@/app/hook/useColor'


const Wave: FC = () => {
  const { context } = useCanvasContext()
  const { width, height } = useResponsiveSize()
  const { generateColor } = useColor()

  const colorsRef = useRef<{ [key: string]: string }>(generateColor())
  const timerRef = useRef(1)
  const frequencyRef = useRef(0.013)
  const frameRef = useRef<number | null>(null)
  const wavesRef = useRef({
    frontWave: new WaveEntity([0.0211, 0.028, 0.015], 'rgba(255,179,0,0.88)'),
    backWave: new WaveEntity([0.0122, 0.018, 0.005], 'rgba(255,179,0,0.48)'),
  })

  useEffect(() => {
    if (!context || !width || !height) return

    const render = () => {
      context.clearRect(0, 0, width, height)
      Object.entries(wavesRef.current).forEach(([waveName, wave]) => {
        wave.waveColor = colorsRef.current[waveName]
        wave.draw(context!, width, height, frequencyRef.current)
      })

      if (timerRef.current === 500) {
        colorsRef.current = generateColor()
        timerRef.current = 1
      }
      timerRef.current += 1
      frequencyRef.current += 0.013
      frameRef.current = requestAnimationFrame(render)
    }

    render()

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [context, width, height, generateColor])

  return null
}

export default Wave