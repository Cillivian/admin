<template>
<div id="index">
<video-bg :sources="[path]" img="../assets/logo.png">

</video-bg>

</div>
</template>
<script>

export default{
    name:'index',
        data(){
            return {
                path:require('../assets/materials/video2.mp4'),
            }

        }
    
}
</script>
<style>
</style>