function ROS() {
    let ros_top = "120px";
    let ros_transition = "all ease 0.8s";

    let ros = document.querySelectorAll(".ros");
    let vh = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
    );

    initROS();
    updateROS();
    document.addEventListener("scroll", function () {
        updateROS();
    });

    function initROS() {
        document.head.insertAdjacentHTML(
            "beforeend",
            "<style>" +
            ".ros {position: relative; opacity: 0.0; top: " +
            ros_top +
            "; transition: " +
            ros_transition +
            ";}" +
            "</style>"
        );
        console.log(">> SolidCoreJS: ROS initialized");
    }

    function updateROS() {
        for (let i = 0; i < 2000; i++) {
            if (ros[i] == undefined) { break };
            let rect = ros[i].getBoundingClientRect();
            //
            // if (i === 0) {
            //     console.log(rect.top - vh);
            // }
            if (rect.top - vh < 0) {
                ros[i].style.top = "0";
                ros[i].style.opacity = "1.0";
            } else {
                ros[i].style.top = ros_top;
                ros[i].style.opacity = "0.0";
            }
        }
    }
}


