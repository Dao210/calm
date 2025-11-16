// Type definitions for translation keys

export type SupportedLocale =
  | 'en'
  | 'es'
  | 'fr'
  | 'de'
  | 'it'
  | 'ar'
  | 'ja'
  | 'zh';

export type TranslationNamespace =
  | 'common'
  | 'navigation'
  | 'sounds'
  | 'modals'
  | 'seo';

// Common namespace keys
export type CommonKeys =
  | 'actions.cancel'
  | 'actions.clear'
  | 'actions.close'
  | 'actions.confirm'
  | 'actions.delete'
  | 'actions.edit'
  | 'actions.save'
  | 'actions.share'
  | 'app.name'
  | 'app.tagline'
  | 'app.description'
  | 'hero.title'
  | 'hero.subtitle'
  | 'hero.description'
  | 'hero.soundsCount'
  | 'features.freeAndOpenSource'
  | 'features.noTracking'
  | 'features.offlineSupport'
  | 'features.soundCount'
  | 'time.hours'
  | 'time.minutes'
  | 'time.seconds';

// Navigation namespace keys
export type NavigationKeys =
  | 'menu'
  | 'items.presets'
  | 'items.share'
  | 'items.sleepTimer'
  | 'items.countdown'
  | 'items.pomodoro'
  | 'items.notepad'
  | 'items.todo'
  | 'items.breathingExercise'
  | 'items.binauralBeats'
  | 'items.isochronicTones'
  | 'items.lofi'
  | 'items.shortcuts'
  | 'items.shuffle'
  | 'items.donate'
  | 'items.source';

// Sounds namespace keys
export type SoundsKeys =
  | 'categories.all'
  | 'categories.favorites'
  | 'categories.nature'
  | 'categories.rain'
  | 'categories.animals'
  | 'categories.urban'
  | 'categories.places'
  | 'categories.transport'
  | 'categories.things'
  | 'categories.noise'
  | 'categories.binaural'
  | 'controls.play'
  | 'controls.pause'
  | 'controls.togglePlay'
  | 'controls.volume'
  | 'globalVolume'
  | 'searchPlaceholder'
  | 'noSounds'
  | 'favorites.add'
  | 'favorites.remove'
  | 'favorites.empty';

// Modals namespace keys
export type ModalsKeys =
  | 'presets.title'
  | 'presets.create'
  | 'presets.save'
  | 'presets.load'
  | 'presets.delete'
  | 'presets.name'
  | 'presets.nameRequired'
  | 'presets.empty'
  | 'share.title'
  | 'share.description'
  | 'share.copy'
  | 'share.copied'
  | 'sleepTimer.title'
  | 'sleepTimer.set'
  | 'sleepTimer.stop'
  | 'sleepTimer.customTime'
  | 'sleepTimer.fadeOut'
  | 'sleepTimer.minutes'
  | 'shortcuts.title'
  | 'shortcuts.shortcutsList'
  | 'shortcuts.presets'
  | 'shortcuts.shareSounds'
  | 'shortcuts.sleepTimer'
  | 'shortcuts.countdownTimer'
  | 'shortcuts.pomodoro'
  | 'shortcuts.notepad'
  | 'shortcuts.todoChecklist'
  | 'shortcuts.breathingExercise'
  | 'shortcuts.togglePlay'
  | 'shortcuts.muteAll'
  | 'shortcuts.shuffle'
  | 'shortcuts.binauralBeats'
  | 'shortcuts.keyboardShortcuts'
  | 'pomodoro.title'
  | 'pomodoro.start'
  | 'pomodoro.pause'
  | 'pomodoro.reset'
  | 'pomodoro.workTime'
  | 'pomodoro.shortBreak'
  | 'pomodoro.longBreak'
  | 'pomodoro.breakTime'
  | 'pomodoro.settings'
  | 'notepad.title'
  | 'notepad.placeholder'
  | 'todo.title'
  | 'todo.placeholder'
  | 'todo.addTask'
  | 'todo.pending'
  | 'todo.completed'
  | 'todo.empty'
  | 'countdown.title'
  | 'countdown.hours'
  | 'countdown.minutes'
  | 'countdown.seconds'
  | 'countdown.start'
  | 'countdown.stop'
  | 'breathing.title'
  | 'breathing.description'
  | 'breathing.start'
  | 'breathing.inhale'
  | 'breathing.hold'
  | 'breathing.exhale'
  | 'breathing.boxBreathing'
  | 'breathing.deepBreathing'
  | 'binaural.title'
  | 'binaural.description'
  | 'binaural.useHeadphones'
  | 'binaural.frequencies.delta'
  | 'binaural.frequencies.theta'
  | 'binaural.frequencies.alpha'
  | 'binaural.frequencies.beta'
  | 'binaural.frequencies.gamma'
  | 'lofi.title'
  | 'lofi.description'
  | 'lofi.playing'
  | 'donate.title'
  | 'donate.description';

// SEO namespace keys
export type SeoKeys =
  | 'meta.title'
  | 'meta.description'
  | 'about.paragraph1.title'
  | 'about.paragraph1.body'
  | 'about.paragraph2.title'
  | 'about.paragraph2.body'
  | 'about.paragraph3.title'
  | 'about.paragraph3.body'
  | 'about.paragraph4.title'
  | 'about.paragraph4.body'
  | 'about.useMoodist'
  | 'footer.madeBy'
  | 'footer.builtWith'
  | 'footer.openSource';

export type TranslationKey =
  | CommonKeys
  | NavigationKeys
  | SoundsKeys
  | ModalsKeys
  | SeoKeys;

export interface TranslationOptions {
  [key: string]: unknown;
  count?: number;
}
