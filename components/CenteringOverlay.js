import { useRef, useState } from "react";
import { Image, PanResponder, StyleSheet, Text, View } from "react-native";

const CARD_WIDTH = 300;
const CARD_HEIGHT = 420;

const CenteringOverlay = ({ imageUri }) => {
  // Initial positions for lines (in px, relative to card image)
  const [left, setLeft] = useState(30);
  const [right, setRight] = useState(CARD_WIDTH - 30);
  const [top, setTop] = useState(30);
  const [bottom, setBottom] = useState(CARD_HEIGHT - 30);

  // PanResponders for each line
  const leftResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        let newLeft = Math.min(Math.max(0, left + gesture.dx), right - 10);
        setLeft(newLeft);
      },
    })
  ).current;

  const rightResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        let newRight = Math.max(Math.min(CARD_WIDTH, right + gesture.dx), left + 10);
        setRight(newRight);
      },
    })
  ).current;

  const topResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        let newTop = Math.min(Math.max(0, top + gesture.dy), bottom - 10);
        setTop(newTop);
      },
    })
  ).current;

  const bottomResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        let newBottom = Math.max(Math.min(CARD_HEIGHT, bottom + gesture.dy), top + 10);
        setBottom(newBottom);
      },
    })
  ).current;

  // Calculate centering percentages
  const leftWidth = left;
  const rightWidth = CARD_WIDTH - right;
  const topHeight = top;
  const bottomHeight = CARD_HEIGHT - bottom;

  const horizontalCentering = (
    (Math.min(leftWidth, rightWidth) / Math.max(leftWidth, rightWidth)) * 100
  ).toFixed(1);

  const verticalCentering = (
    (Math.min(topHeight, bottomHeight) / Math.max(topHeight, bottomHeight)) * 100
  ).toFixed(1);

  return (
    <View style={styles.container}>
      <View style={styles.cardArea}>
        <Image source={{ uri: imageUri }} style={styles.cardImage} />
        {/* Left Line */}
        <View
          style={[styles.vertLine, { left }]}
          {...leftResponder.panHandlers}
        />
        {/* Right Line */}
        <View
          style={[styles.vertLine, { left: right }]}
          {...rightResponder.panHandlers}
        />
        {/* Top Line */}
        <View
          style={[styles.horizLine, { top }]}
          {...topResponder.panHandlers}
        />
        {/* Bottom Line */}
        <View
          style={[styles.horizLine, { top: bottom }]}
          {...bottomResponder.panHandlers}
        />
      </View>
      <Text style={styles.resultText}>
        Horizontal Centering: {horizontalCentering}%
      </Text>
      <Text style={styles.resultText}>
        Vertical Centering: {verticalCentering}%
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center", marginTop: 20 },
  cardArea: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    position: "relative",
    backgroundColor: "#eee",
  },
  cardImage: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 0,
  },
  vertLine: {
    position: "absolute",
    top: 0,
    width: 4,
    height: CARD_HEIGHT,
    backgroundColor: "red",
    zIndex: 2,
  },
  horizLine: {
    position: "absolute",
    left: 0,
    width: CARD_WIDTH,
    height: 4,
    backgroundColor: "blue",
    zIndex: 2,
  },
  resultText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CenteringOverlay;