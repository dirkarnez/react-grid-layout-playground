/* 
"module.exports" / "export default" is not needed.
browser version of babel do all the work for us.
*/

// import ReactGridLayout, { useContainerWidth } from "react-grid-layout";

var ReactGridLayoutLibrary = null;

function MyGrid() {
    // const { width, containerRef, mounted } = ReactGridLayoutLibrary.ReactGridLayout.useContainerWidth();

    const [ loaded, setLoaded ] = React.useState(false);

    React.useEffect(() => {
        fetch("./ReactGridLayoutLibrary.js")
        .then(a => a.text())
        .then(a => {
            eval(a);
            ReactGridLayoutLibrary.ReactGridLayout.WidthProvider(ReactGridLayoutLibrary.ReactGridLayout);
            setLoaded(true);
        });

    }, []);

  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 }
  ];

  return (
    <div>
        { loaded &&
        <ReactGridLayoutLibrary.ReactGridLayout
          layout={layout}
          width="500"
          gridConfig={{ cols: 12, rowHeight: 30 }}
          dragConfig={{ enabled: true,/* handle: '.handle'*/ }}
        >
          <div key="a" style={{borderColor: "#000 !important", borderStyle: "solid"}}>a</div>
          <div key="b" style={{borderColor: "#000 !important", borderStyle: "solid"}}>b</div>
          <div key="c" style={{borderColor: "#000 !important", borderStyle: "solid"}}>c</div>
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