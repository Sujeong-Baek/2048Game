const num2colors = new Map([
  [0, [187, 173, 160]],
  [2, [248, 231, 28]],
  [4, [242, 202, 24]],
  [8, [245, 159, 27]],
  [16, [246, 122, 29]],
  [32, [242, 83, 34]],
  [64, [210, 30, 40]],
  [128, [241, 45, 98]],
  [256, [234, 33, 126]],
  [512, [191, 33, 128]],
  [1024, [149, 33, 135]],
  [2048, [98, 33, 138]],
]);

export default function Tile({ number }) {
  const [r, g, b] = num2colors.get(number);
  const style = { backgroundColor: `rgb(${r}, ${g}, ${b})` };
  return (
    <div className="tile" style={style}>
      { number === 0 ? "" : number }
    </div>    
  );
}