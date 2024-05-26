"use client"
import { FC, useRef, useEffect } from 'react'
import { useCanvasContext } from '@/app/hook/useCanvas'
import useResponsiveSize from '@/app/hook/useResponsiveSize'
import WaveEntity from '@/app/entity/WaveEntity'
import useColor from '@/app/hook/useColor'

const Wave: FC = () => {
  const { context } = useCanvasContext()
  const { width, height } = useResponsiveSize()
  const { generateColor } = useColor()

  const frequencyRef = useRef(0.013)
  const colorsRef = useRef(generateColor())
  const timerRef = useRef(1)
  const wavesRef = useRef({
    frontWave: new WaveEntity([0.0211, 0.028, 0.015], 'rgba(255,179,0,0.88)'),
    backWave: new WaveEntity([0.0122, 0.018, 0.005], 'rgba(255,179,0,0.48)'),
  })

  const render = () => {
    if (!context) return

    context.clearRect(0, 0, width, height)
    Object.entries(wavesRef.current).forEach(([waveName, wave]) => {
      wave.waveColor = colorsRef.current[waveName]
      wave.draw(context, width, height, frequencyRef.current)
    })
    if (timerRef.current === 500) {
      colorsRef.current = generateColor()
      timerRef.current = 1
    }
    timerRef.current++
    frequencyRef.current += 0.013
    requestAnimationFrame(render)
  }

  useEffect(() => {
    if (context) render()
  }, [context, width, height]) // Run effect when context, width or height changes

  return null
}

export default Wave
