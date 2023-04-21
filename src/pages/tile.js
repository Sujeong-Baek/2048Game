export default function Tile({ number }) {
  return (
    <div className="tile">
      { number }
        <style jsx>{`
        .tile {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 2rem;
          width: 100px;
          height: 100px;
          background-color: white;
          border: 1px solid #000000;
        }
      `}</style>
    </div>    
  );
}

// css: grid
// react tutorial
// 과제: 다음주까지 0을 4x4 보드판으로 정렬해오기
// https://www.youtube.com/watch?v=6UbkwRnfgUM
// 보드 배경색깔만 입혀서 pr - issue 2
// 새 브랜치 파서 tile 정렬해서 또다른 pr - issue3