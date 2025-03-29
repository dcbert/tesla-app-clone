// import { Asset } from "expo-asset";
// import { Renderer } from "expo-three";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
// import { AmbientLight, DirectionalLight, PerspectiveCamera, Scene } from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ModelViewer = () => {
  // const glRef = useRef(null);

  // useEffect(() => {
  //   if (!glRef.current) return;

  //   const loadModel = async () => {
  //     const gl = glRef.current;
  //     const asset = Asset.fromModule(require("@/assets/3d-models/tesla_roadster_2020.glb"));
  //     await asset.downloadAsync();
  //     const context = gl.getContext("webgl", { alpha: true, antialias: true });

  //     const renderer = new Renderer({ gl: context });
  //     renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

  //     const scene = new Scene();
  //     const camera = new PerspectiveCamera(55, gl.drawingBufferWidth / gl.drawingBufferHeight, 0.1, 1000);
  //     camera.position.set(0, 0.5, 4);

  //     // Luci
  //     scene.add(new AmbientLight(0xffffff, 0.5));
  //     const light = new DirectionalLight(0xffffff, 10);
  //     light.position.set(0, 3, 4);
  //     scene.add(light);
  //     let car = null
  //     // Carica il modello
  //     const loader = new GLTFLoader();
  //     console.log(asset.localUri)
  //     loader.load(asset.localUri, (gltf) => {
  //       car = gltf.scene
  //       scene.add(car);
  //     });

  //     const animate = () => {
  //       requestAnimationFrame(animate);
  //       renderer.render(scene, camera);
  //       gl.endFrameEXP();
  //     };

  //     animate();
  //   };

  //   loadModel();
  // }, []);

  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <GLView
        style={{ flex: 1 }}
        onContextCreate={(gl) => (glRef.current = gl)}
      /> */}
      <Image
        source={require("@/assets/images/tesla_m3.avif")}
        style={styles.carImage}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  carImage: {
    width: "90%",
    height: "100%",
    resizeMode: "contain",
  },
});
export default ModelViewer;
