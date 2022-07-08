import Countdown from 'react-countdown'
import { ShareIcon } from '@heroicons/react/outline'
import { StatBar } from '../stats/StatBar'
import { Histogram } from '../stats/Histogram'
import { GameStats } from '../../lib/localStorage'
import { shareStatus } from '../../lib/share'
import { tomorrow } from '../../lib/words'
import { BaseModal } from './BaseModal'
import {
  STATISTICS_TITLE,
  GUESS_DISTRIBUTION_TEXT,
  NEW_WORD_TEXT,
  SHARE_TEXT,
} from '../../constants/strings'
import { MigrationIntro } from '../stats/MigrationIntro'
import { ENABLE_MIGRATE_STATS } from '../../constants/settings'

type Props = {
  isOpen: boolean
  handleClose: () => void
  solution: string
  guesses: string[]
  gameStats: GameStats
  isGameLost: boolean
  isGameWon: boolean
  handleShareToClipboard: () => void
  handleMigrateStatsButton: () => void
  isHardMode: boolean
  isDarkMode: boolean
  isHighContrastMode: boolean
  numberOfGuessesMade: number
}
export const StatsModal = ({
  isOpen,
  handleClose,
  solution,
  guesses,
  gameStats,
  isGameLost,
  isGameWon,
  handleShareToClipboard,
  handleMigrateStatsButton,
  isHardMode,
  isDarkMode,
  isHighContrastMode,
  numberOfGuessesMade,
}: Props) => {
  if (gameStats.totalGames <= 0) {
    return (
      <BaseModal
        title={`YOU FAILED`}
        isOpen={isOpen}
        handleClose={handleClose}
      >
        <StatBar gameStats={gameStats} />
        {ENABLE_MIGRATE_STATS && (
          <MigrationIntro handleMigrateStatsButton={handleMigrateStatsButton} />
        )}
      </BaseModal>
    )
  }
  return (
    <BaseModal
      title={`YOU FAILED`}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      You are weak, so I will give you a hint: <br></br><br></br>
      'Beheader, Beheader!<br></br>
      Off with his head!<br></br>
      He's mocked the Queen,<br></br>
      So, he should be dead! '<br></br>
      <br></br>
      'But M'Lord, M'Sire,<br></br>
      He said not a word,<br></br>
      He merely coughed,<br></br>
      That's all she heard! '<br></br>
      <br></br>
      'I am the king,<br></br>
      I make the rules,<br></br>
      So cut off his head,<br></br>
      You hideous fool! '<br></br>
      <br></br>
      
      <button
              type="button"
              className="inline-flex justify-center items-center text-center mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
              onClick={()=>{
                localStorage.clear();
                window.location.reload();
              }}
            >
              Guess The Fallen Hero
      </button>
    </BaseModal>
  )
}
