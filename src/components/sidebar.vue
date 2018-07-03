<template>
    <div>
        <div class="sidebar container-fluid">
            <div class="row">
                <div class="col bg-blue text-center py-3 logo">
                    <img src="../assets/logoaw.png" width="100%">
                    <span class="text-logo">Rifaldhi</span>
                </div>
            </div>
            <div class="row align-items-center h-100 text-center">
                <div class="row no-gutters w-100 sidebar-icon">
                    <div class="col-12 py-2 text-dark">
                        <i class="fa fa-linkedin"></i>
                    </div>
                    <div class="col-12 py-2 text-dark">
                        <i class="fa fa-instagram"></i>
                    </div>
                    <div class="col-12 py-2 text-dark">
                        <i class="fa fa-twitter"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.sidebar{
    width: 70px;
    height: 100vh;
    position: fixed;
    left: 0;
    background-color: white;
    color: darkgray;
}
.logo{
    height: 150px;;
}
.text-logo{
    color: white;
    font-size: 12px;
    text-align: center;
}
.sidebar-icon{
    font-size: 20px;
}
</style>
