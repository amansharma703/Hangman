const HEAD = (
  <div
    style={{
      width: "40px",
      height: "40px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "48px",
      right: "-15px",
    }}
  />
)

const BODY = (
  <div
    style={{
      width: "10px",
      height: "70px",
      background: "black",
      position: "absolute",
      top: "85px",
      right: 0,
    }}
  />
)

const RIGHT_ARM = (
  <div
    style={{
      width: "70px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "100px",
      right: "-70px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
)

const LEFT_ARM = (
  <div
    style={{
      width: "70px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "100px",
      right: "10px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
)

const RIGHT_LEG = (
  <div
    style={{
      width: "70px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "145px",
      right: "-60px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
)

const LEFT_LEG = (
  <div
    style={{
      width: "70px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "145px",
      right: 0,
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
  numberOfGuesses: number
}

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: "10px",
          width: "120px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "250px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div style={{ height: "10px", width: "250px", background: "black" }} />
    </div>
  )
}
