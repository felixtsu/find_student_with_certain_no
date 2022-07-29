// 这个事件在老师安排任务以后运行
// 
// 事件变量：
// weights是学生编号的数组，学生已经按照编号从小到大排好了
// target是老师要找的编号，需要找到这个编号的位数
// 
// 
// 
// 
// 
bsearch.solvePuzzle(function (weights, target) {
    // 这个指令可以让指定位置的学生报一下ta的编号
    // 
    // 比如现在就是拿到第222位的学生的编号
    game.splash(bsearch.at(222))
    // 这个指令可以知道现在一共有多少人
    // 
    // 这个数量每次都不一样的哦
    game.splash(bsearch.size())
    // 找到目标学生以后，就用这个指令告诉老师
    // 
    // 现在是告诉老师第 0 位就是要找的人，哈，跟瞎蒙一个没有区别
    bsearch.submitAnswer(0)
})
bsearch.startGame()
