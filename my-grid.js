/* 
"module.exports" / "export default" is not needed.
browser version of babel do all the work for us.
*/

// import ReactGridLayout, { useContainerWidth } from "react-grid-layout";

var ReactGridLayoutLibrary = null;

function MyGrid() {
  const [ loaded, setLoaded ] = React.useState(false);

  React.useEffect(() => {
    fetch("./ReactGridLayoutLibrary.v.2.1.1.js")
    .then(a => a.text())
    .then(a => {
        eval(a);
        ReactGridLayoutLibrary.ReactGridLayout.WidthProvider(ReactGridLayoutLibrary.ReactGridLayout);
        setLoaded(true);
    });

  }, []);
	return (
    loaded && <MyGridReal/>
	);
}


function MyGridReal() {
  const { width, containerRef, mounted } = ReactGridLayoutLibrary.ReactGridLayout.useContainerWidth();

  return (
    <div ref={containerRef} style={{width: "100%"}}>
      {
        mounted && 
        <ReactGridLayoutLibrary.ReactGridLayout
          width={width}
          gridConfig={{ cols: 12, rowHeight: 30 }}>
            <div key="a" style={{borderColor: "#000 !important", borderStyle: "solid"}} data-grid={{ x: 0, y: 0, w: 1, h: 2, static: true }}>
              a
            </div>
            <div key="b" style={{borderColor: "#000 !important", borderStyle: "solid"}} data-grid={{ x: 1, y: 0, w: 3, h: 2 }}>
              b
            </div>
            <div key="c" style={{borderColor: "#000 !important", borderStyle: "solid"}} data-grid={{ x: 4, y: 0, w: 1, h: 2 }}>
              c
            </div>
            <div key="d" style={{borderColor: "#000 !important", borderStyle: "solid"}} data-grid={{ x: 5, y: 0, w: 1, h: 2 }}>
              c
            </div>
            <div key="e" style={{borderColor: "#000 !important", borderStyle: "solid"}} data-grid={{ x: 6, y: 0, w: 1, h: 2 }}>
              c
            </div>
            <div key="f" style={{borderColor: "#000 !important", borderStyle: "solid"}} data-grid={{ x: 7, y: 0, w: 5, h: 2 }}>
              cds
            </div>
        </ReactGridLayoutLibrary.ReactGridLayout>
      }
    </div>
  );
}


// import ReactGridLayout, { useContainerWidth, verticalCompactor } from 'react-grid-layout';

// function MyGrid() {

//   return (
//     <div ref={containerRef}>
//       {mounted && (
//         <ReactGridLayout
//           width={width}
//           layout={layout}
//           gridConfig={{ cols: 12, rowHeight: 30 }}
//           dragConfig={{ enabled: true, handle: '.handle' }}
//           compactor={verticalCompactor}
//         >
//           {children}
//         </ReactGridLayout>
//       )}
//     </div>
//   );
// }