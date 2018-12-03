function chessBoard(size) {
    for(var i = 0; i < size; i++) {
        if (i % 2 === 0) {
           console.log('' + '# # # #');
         } else {
           console.log(' ' + '# # # #');
         }
    }
}

chessBoard(8);
chessBoard(20);