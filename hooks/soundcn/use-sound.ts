"use client"

import { useCallback, useRef, useState } from "react"
import { playSound, type SoundPlayback } from "@/lib/sound-engine"
import type {
  PlayFunction,
  SoundAsset,
  SoundControls,
  UseSoundOptions,
  UseSoundReturn,
} from "@/lib/sound-types"

export function useSound(
  sound: SoundAsset,
  options: UseSoundOptions = {}
): UseSoundReturn {
  const {
    volume = 1,
    playbackRate = 1,
    interrupt = false,
    soundEnabled = true,
    onPlay,
    onEnd,
    onStop,
  } = options

  const [isPlaying, setIsPlaying] = useState(false)
  const currentPlayback = useRef<SoundPlayback | null>(null)

  const stop = useCallback(() => {
    if (currentPlayback.current) {
      currentPlayback.current.stop()
      currentPlayback.current = null
      setIsPlaying(false)
      onStop?.()
    }
  }, [onStop])

  const pause = useCallback(() => {
    stop()
  }, [stop])

  const play: PlayFunction = useCallback(
    (overrides) => {
      if (!soundEnabled || typeof window === "undefined") return

      if (interrupt) {
        stop()
      }

      onPlay?.()
      setIsPlaying(true)

      playSound(sound.dataUri, {
        volume: overrides?.volume ?? volume,
        playbackRate: overrides?.playbackRate ?? playbackRate,
        onEnd: () => {
          setIsPlaying(false)
          currentPlayback.current = null
          onEnd?.()
        },
      })
        .then((playback) => {
          currentPlayback.current = playback
        })
        .catch(() => {
          setIsPlaying(false)
        })
    },
    [sound.dataUri, soundEnabled, interrupt, onPlay, volume, playbackRate, onEnd, stop]
  )

  const controls: SoundControls = {
    stop,
    pause,
    isPlaying,
    duration: sound.duration ?? null,
    sound,
  }

  return [play, controls] as const
}
