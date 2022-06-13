export interface HotdogClassification {
  isHotdog: boolean;
  confidence: number; // 0 = not sure at all, 1 = 100% sure it's a hotdog.
}
