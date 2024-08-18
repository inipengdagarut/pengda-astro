import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '@/styles/MasonryLayout.css';

const images: string[] = [
    'https://picsum.photos/300/200',
    'https://picsum.photos/300/300',
    'https://picsum.photos/300/400',
    'https://picsum.photos/300/500',
    'https://picsum.photos/300/600',
];


const MasonryItem = ({ image }) => {
    return (
        <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            className="masonry-item"
        >
            <img src={image} alt="masonry image" />
        </motion.div>
    );
};

const Masonry = ({ images }) => {
    return (
        <div className="masonry-container">
            {images.map((image, index) => (
                <MasonryItem key={index} image={image} />
            ))}
        </div>
    );
};

function MasonryLayout() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            // Fetch images from an API or generate random images
            const fetchedImages = [
                'https://picsum.photos/300/200',
                'https://picsum.photos/300/300',
                'https://picsum.photos/300/400',
                'https://picsum.photos/300/500',
                'https://picsum.photos/300/600',
            ];
            setImages(fetchedImages);
        };
        fetchImages();
    }, []);

    return (
        <div className="App">
            <Masonry images={images} />
        </div>
    );
}

export default MasonryLayout;

















// const MasonryLayout: React.FC = () => {
//     const [items, setItems] = useState<string[]>(images);
//     const [visible, setVisible] = useState<boolean>(true);
//     const gridRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setVisible((prevVisible) => !prevVisible);
//             if (visible) {
//                 removeRandomItem();
//             } else {
//                 restoreItems();
//             }
//         }, 2000); // Ganti interval sesuai kebutuhan

//         return () => clearInterval(interval);
//     }, [visible]);

//     const removeRandomItem = (): void => {
//         setItems((prevItems) => {
//             if (prevItems.length > 0) {
//                 const randomIndex = Math.floor(Math.random() * prevItems.length);
//                 const updatedItems = [...prevItems];
//                 updatedItems[randomIndex] = '';
//                 return updatedItems;
//             }
//             return prevItems;
//         });
//     };

//     const restoreItems = (): void => {
//         setItems(images);
//     };

//     // Mengatur layout Masonry secara dinamis menggunakan JavaScript
//     useEffect(() => {
//         const grid = gridRef.current;
//         if (grid) {
//             const columns = Array.from(grid.children) as HTMLElement[];
//             const columnHeights: number[] = Array(grid.childElementCount).fill(0);

//             columns.forEach((item) => {
//                 const minHeightIndex = columnHeights.indexOf(Math.min(...columnHeights));
//                 const column = columns[minHeightIndex];
//                 item.style.gridRowStart = String(columnHeights[minHeightIndex] + 1);
//                 columnHeights[minHeightIndex] += item.getBoundingClientRect().height;
//             });
//         }
//     }, [items]);

//     return (
//         <div className="masonry-grid" ref={gridRef}>
//             <AnimatePresence>
//                 {items.map((image, index) => (
//                     <motion.div
//                         key={index}
//                         className="masonry-item"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         transition={{ duration: 0.5 }}
//                         style={{ visibility: image ? 'visible' : 'hidden' }}
//                     >
//                         {image && <img src={image} alt="masonry" />}
//                     </motion.div>
//                 ))}
//             </AnimatePresence>
//         </div>
//     );
// };

// export default MasonryLayout;
