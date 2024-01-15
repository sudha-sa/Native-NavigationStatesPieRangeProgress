// import { StyleSheet, Text, View, Dimensions } from 'react-native'
// import React, { useState, useEffect } from 'react';

// // const { width, height } = Dimensions.get('window');
// const orientation = isPortrait() ? 'portrait' : 'landscape';

// function Hooks() {
//   const [orientation, setOrientation] = useState('portrait');


//   const handleOrientationChange = (height, width ) => {
//     if (width > height) {
//       setOrientation('landscape');
//     } else {
//       setOrientation('portrait');
//     }
//   };
//   const { height, width } = Dimensions.get('screen');
//   console.log(height,width)
//   useEffect(() => {
//     handleOrientationChange(height, width);
//   }, [height,width]);

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',}}>
//       <Text>Current Orientation: {orientation}</Text>
//     </View>
//   );
// }

// export default Hooks;







// import React, { useState } from "react";
// import { Text, View, Button } from "react-native";
// import { OrientationLocker, PORTRAIT, LANDSCAPE } from "react-native-orientation-locker";

// const  Hooks = ()=> {
//   const [showVideo, setShowVideo] = useState(true);
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <OrientationLocker
//         orientation={PORTRAIT}
//         onChange={orientation => console.log('onChange', orientation)}
//         onDeviceChange={orientation => console.log('onDeviceChange', orientation)}
//       />
//       <Button title="Toggle Video" onPress={() => setShowVideo(!showVideo)} />
//       {showVideo && (
//         <View>
//           <OrientationLocker orientation={LANDSCAPE} />
//           <View style={{ width: 320, height: 180, backgroundColor: '#ccc' }}>
//             <Text>Landscape video goes here</Text>
//           </View>
//         </View>
//       )}
//     </View>
//   );
// };

// export default Hooks