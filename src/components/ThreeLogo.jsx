import { useEffect } from 'react';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import * as THREE from 'three'
import '../styles/ThreeLogo.css'

function ThreeLogo2() {
    useEffect(() => {
        // Loaders
        const loader = new GLTFLoader();

        // Create a scene
        const scene = new THREE.Scene()

        // Container
        const container = document.getElementById('container3D');

        // Create a camera
        const camera = new THREE.PerspectiveCamera(18, container.clientWidth / container.clientHeight, 0.1, 1000)

        // Create a canvas
        const canvas = document.getElementById("canvas3D");


        // Create a renderer
        const  renderer = new THREE.WebGLRenderer({canvas, alpha: true});
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.setSize( container.clientWidth, container.clientHeight);
        renderer.setClearColor(0x000000, 0);
        renderer.setPixelRatio(window.devicePixelRatio);

        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        loader.load('scene.gltf', function ( gltf ) {
            const mesh = gltf.scene;
            mesh.traverse((child) => {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });
            mesh.position.set(0, 0, 0);
            mesh.scale.set(0.8, 0.8, 0.95);
            scene.add( mesh );
        }, undefined, function ( error ) {
            console.error( error );
        } );

        // Set the scene position
        scene.position.set(0, -2, 0);

        // Set the camera position
        camera.position.x = 25;
        camera.position.y = 5;
        camera.position.z = 10;
        camera.lookAt(scene.position);

        let controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.8;

        //Add a listener to the window, so we can resize the window and the camera
        window.addEventListener("resize", function () {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( container.clientWidth, container.clientHeight);
        });

        


        function animate() {
            controls.update();
            renderer.render( scene, camera );
        }

        const stopScroll = (event) => {
            event.preventDefault();
            event.stopPropagation();
        };

        renderer.setAnimationLoop( animate );
        canvas.removeEventListener('wheel', stopScroll, {passive: false});
    }, []);

    return (
        <div id="container3D">
            <canvas id='canvas3D'></canvas>
        </div>
    );
}

export default ThreeLogo2;