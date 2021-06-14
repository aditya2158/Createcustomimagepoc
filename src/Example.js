import { useState } from 'react';
import { Rnd } from 'react-rnd';
import html2canvas from 'html2canvas';


export const Example = () => {
	const [disableDragging, setDisableDragging] = useState(false);
	const [enableResizing, setEnableResizing] = useState(false);
	const [imageElements, setImageElements] = useState([]);
	const [state, setState] = useState({
		width: 200,
		height: 20,
		x: 10,
		y: 10
	});
	const [imageUri, setImageUri] = useState('');

	const handleOnbtnClick = () => {
		const data = [...imageElements];
		data.push({
			type: 'box', style: {
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				border: "solid 10px green",
				backgroundColor: 'red',
				width: 200,
				height: 200,
				x: state.x + 0,
				y: state.y + 20
			}
		});
		setImageElements(data);
	}

	const handleOnVerticalLineClick = () => {
		const data = [...imageElements];
		data.push({
			type: 'line', style: {
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				border: "solid 1px green",
				backgroundColor: 'green',
				width: 200,
				height: 5,
				x: state.x + 50,
				y: state.y + 20
			}
		});
		setImageElements(data);
	}

	const handleEditClick = () => {
		setEnableResizing(!enableResizing);
		setDisableDragging(!disableDragging);
	}

	const renderElements = (ele, index) => {
		switch (ele.type) {
			case 'line': {
				return (<Rnd
					bounds=".pareent"
					disableDragging={disableDragging}
					enableResizing={enableResizing}
					style={ele.style}
					size={{ width: ele.style.width, height: ele.style.height }}
					position={{ x: ele.style.x, y: ele.style.y }}
					onDragStop={(e, d) => {
						const data = [...imageElements];
						data[index].style.x = d.x;
						data[index].style.y = d.y;
						setImageElements(data);
					}}
					onResizeStop={(e, direction, ref, delta, position) => {
						const data = [...imageElements];
						data[index].style.width = ref.style.width;
						data[index].style.height = ref.style.height;
						setImageElements(data);
					}}
				>
				</Rnd>);
			}
			case 'box': {
				return (<Rnd
					bounds=".pareent"
					disableDragging={disableDragging}
					enableResizing={enableResizing}
					style={ele.style}
					size={{ width: ele.style.width, height: ele.style.height }}
					position={{ x: ele.style.x, y: ele.style.y }}
					onDragStop={(e, d) => {
						const data = [...imageElements];
						data[index].style.x = d.x;
						data[index].style.y = d.y;
						setImageElements(data);
					}}
					onResizeStop={(e, direction, ref, delta, position) => {
						const data = [...imageElements];
						data[index].style.width = ref.style.width;
						data[index].style.height = ref.style.height;
						setImageElements(data);
					}}
				>
					Rnd
				</Rnd>);
			}
			default: return;
		}
	}

	const capture = ()=>{
		const capturedCanvas = document.getElementById('result');
		html2canvas(capturedCanvas, {
			scrollX: 0,
			scrollY: 0,
		}).then(canvas => {
			localStorage.setItem(
				'canvasImage',
				canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream'),
			);
			setImageUri(canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream'));
		});
	};

	return (
		<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} id="result">
			<div className="pareent" style={{ height: '30vh', backgroundColor: 'yellow' }} />
			{imageElements.map((ele, index) => (
				renderElements(ele, index)
			))}
			<p>
				button<button onClick={handleOnbtnClick}>+</button>
			</p>
			<p>
				Horizontal line<button onClick={handleOnVerticalLineClick}>+</button>
			</p>
			<p>
				<button onClick={handleEditClick}>{!enableResizing ? 'Resize' : 'Drag'}</button>
			</p>
			<p>
				<button onClick={capture}>Create Image</button>			
			</p>
			{imageUri.length > 0 && <div>
				<p>Taken from above</p>
				<img height="250px" width="475px" src={imageUri} alt="PoC" />
			</div>}
		</div>
	);
};
