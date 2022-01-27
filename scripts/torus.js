container = document.getElementById( "canvas" );

const scene = new THREE.Scene();
scene.background = new THREE.Color( 0x0c0c0c );
const camera = new THREE.PerspectiveCamera( 75, container.clientWidth / container.clientHeight, 0.1, 1000 );
camera.position.z = 1.5;

const geometry = new THREE.TorusGeometry( .85, .5, 50, 100 );
const material = new THREE.PointsMaterial( { color: 0x759aff, size: .005} );
const torus = new THREE.Points( geometry, material );
torus.rotation.x = .5;
torus.rotation.y = .6;
scene.add( torus );


renderer = new THREE.WebGLRenderer();
renderer.setSize( container.clientWidth, container.clientHeight );
container.appendChild( renderer.domElement );

function animate() {
	requestAnimationFrame( animate );
    torus.rotation.x += .0005;
    torus.rotation.y += .0006;
    torus.rotation.z += .0005;
	renderer.render( scene, camera );
}
animate();