import { HelloSticker, HelloStickerDimensions } from "./HelloSticker";
import { LocationSticker, LocationStickerDimensions } from "./LocationSticker";
import { MusicSticker, MusicStickerDimensions } from "./MusicSticker";
import {
  QuestionsSticker,
  QuestionsStickerDimensions,
} from "./QuestionsSticker";
import { SkiaSticker, SkiaStickerDimensions } from "./SkiaSticker";
import { SupportSticker, SupportStickerDimensions } from "./SupportSticker";
import { ThankYouStickerDimensions, ThankYouSticker } from "./ThankYouSticker";
import { TimeSticker, TimeStickerDimensions } from "./TimeSticker";

export const stickers = [
  { Sticker: HelloSticker, dimensions: HelloStickerDimensions },
  { Sticker: LocationSticker, dimensions: LocationStickerDimensions },
  { Sticker: QuestionsSticker, dimensions: QuestionsStickerDimensions },
  { Sticker: SupportSticker, dimensions: SupportStickerDimensions },
  { Sticker: TimeSticker, dimensions: TimeStickerDimensions },
  { Sticker: SkiaSticker, dimensions: SkiaStickerDimensions },
  { Sticker: ThankYouSticker, dimensions: ThankYouStickerDimensions },
  { Sticker: MusicSticker, dimensions: MusicStickerDimensions },
];