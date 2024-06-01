import HomeShortcutButtonUI from './HomeShortcutButtonUI';

export default function HomeShortcutButton({icon, title, onPress}) {
  return (
    <HomeShortcutButtonUI
      icon={icon}
      title={title}
      onPress={onPress}></HomeShortcutButtonUI>
  );
}
