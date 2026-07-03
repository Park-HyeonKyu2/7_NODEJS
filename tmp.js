const data = fs.readFileSync("./exmaple1.txt", "utf8")
console.log("파일 내용: ", data)

fs.readFile("example2.txt", "utf8", (err, data) => {
    if(err) {
        console.log("파일읽기 실패: ", err)
        return
    }
    console.log("파일 내용: ", data)
})