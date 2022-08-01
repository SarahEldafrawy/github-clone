import { ImageSourcePropType } from "react-native"

export interface ICardProps {
  title: string
  source: ImageSourcePropType
  text: string
  onPress: () => void
}
