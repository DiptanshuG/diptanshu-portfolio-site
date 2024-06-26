"use client"

import { FC, useCallback } from 'react'

import { useCanvasContext } from '@/app/hook/useCanvas'
import useResponsiveSize from '@/app/hook/useResponsiveSize'
import WaveEntity from '@/app/entity/WaveEntity'
import useColor from '@/app/hook/useColor'


const Wave: FC = () => {
  const { context } = useCanvasContext()
  const { width, height } = useResponsiveSize()
  const { generateColor } = useColor()

  let frequency = 0.013
  let colors: { [key: string]: string } = generateColor()
  let timer = 1
  const waves = {
    frontWave: new WaveEntity([0.0211, 0.028, 0.015], 'rgba(255,179,0,0.88)'),
    backWave: new WaveEntity([0.0122, 0.018, 0.005], 'rgba(255,179,0,0.48)'),
  }

  const render = useCallback(() => {
    context?.clearRect(0, 0, width, height)
    Object.entries(waves).forEach(([waveName, wave]) => {
      wave.waveColor = colors[waveName]
      wave.draw(context!, width, height, frequency)
    })
    if (timer === 500) {
      colors = generateColor()
      timer = 1
    }
    timer++
    frequency += 0.013
    const frame=requestAnimationFrame(render)

    return ()=>{
      cancelAnimationFrame(frame)
    }
  }, [context,width,height,generateColor])

  if (context) render()
  return null
}

export default Wave