import * as THREE from '../build/three.module.js'
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

class App{
    constructor() {
        const divContainer = document.querySelector("#webgl-container");
        this._divContainer = divContainer;
        // 다른 method에서 참조 하기 위해

        const renderer = new THREE.WebGLRenderer({antialias : true});
        //antialias : true : 3차원 장면이 렌더링될 때 오브젝트들의 경계선이 계단 현상 없이 표현
        renderer.setPixelRatio(window.devicePixelRatio);
        // display 속성
        divContainer.appendChild(renderer.domElement);
        // convas의 dom 구성
        this._renderer = renderer;

        const scene = new THREE.Scene();
        this._scene = scene;

        this._setupCamera();
        this._setupLight(); // 광원
        this._setupModel(); // 3차원
        // this._setupControls();

        // 밑줄로 정의할 경우 app 클래스 외부에서는 밑줄로 시작하는 field 또는 method를 호출하면 안됨

        window.onresize = this.resize.bind(this);
        // 창 크기 변환을 위해
        this.resize();

        requestAnimationFrame(this.render.bind(this))
        // API에 호출해서 생성
        // render method는 실제로 3차원 그래픽 장면을 만들어주는 method
        // bind 를 통해 넘겨주는 이유
        // :render method의 코드 안에서 사용되는 this가 app 클래스의 객체를 가르키도록 하기 위함
    }
    // _setupControls(){
    //     new OrbitControls(this._camera, this._divContainer);
    // }

    _setupCamera(){
        const width = this._divContainer.clientWidth;
        const height = this._divContainer.clientHeight;
        // 3차원 그래픽 출력할 영역에 대한 가로, 세로 크기
        const camera = new THREE.PerspectiveCamera(
            75,
            width / height,
            0.1,
            100
        );
        camera.position.z = 2;
        this._camera = camera
    }
    _setupLight(){
        const color = 0xffffff;
        // 망원의 색
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1,2,4);
        this._scene.add(light);
    }

    _setupModel() {
        // 파란 정육면체
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        // 가로, 세로, 깊이
        const fillMaterial = new THREE.MeshPhongMaterial({color: 0x515151});
        // 회색 색상의 재질을 이용하여 mesh 타입의 오브젝트를 생성

        const cube = new THREE.Mesh(geometry, fillMaterial);

        const lineMaterial = new THREE.LineBasicMaterial({color: 0xffff00})
        const line = new THREE.LineSegments(
            new THREE.WireframeGeometry(geometry), lineMaterial
        )
        // 라인
        // WireframeGeometry : 와이어프레임 형태로 지오메트리를 표현하기 위해 이용(모든 외곽선)

        const group = new THREE.Group()
        group.add(cube);
        group.add(line)
        // mesh + line 하나의 그룹으로 묶어줌

        this._scene.add(group);
        this._cube = group;
    }

    // 화면 크기 변할때의 크기
    resize() {
        const width = this._divContainer.clientWidth;
        const height = this._divContainer.clientHeight;
        // div 크기

        this._camera.aspect = width / height;
        this._camera.updateProjectionMatrix();

        this._renderer.setSize(width, height);
    }

    render(time) {
        this._renderer.render(this._scene, this._camera);
        this.update(time);
        // 애니메이션 효과
        requestAnimationFrame(this.render.bind(this));
    }

    update(time){
        // render에서 전달받은 time에 0.001을 곱해서 milli-second 단위를 second 단위로 변환
        time *= 0.001; 

        // 자동회전 코드
        this._cube.rotation.x = time;
        this._cube.rotation.y = time;
        // cube : 위에서 만들어준 육면체
        // 시간은 계속 변하므로 x,y 축으로 cube가 계속 회전

        // 마우스 회전
    }
}

window.onload = function(){
    new App();
}