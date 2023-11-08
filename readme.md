# 2023 THE F2E Mission1 - 立委競選官網

## 感謝設計稿提供設計師 - jhen

## 使用工具

- js plugin
1. gsap 滾動效果呈現
2. lenis 絲滑捲動效果
3. lottie-player 設計師提供 loading 物件的播放
4. sweetalert2 美化過的 alert 視窗

- 其他功能
1. google sheet 當作小型資料庫，儲存每筆捐贈的數目以及用總和功能算出各方案的捐款人數及總額。
2. google app script 將上述的 google sheet 轉換成 API 以及連結 gmail 做出系統回信的功能。
3. express.js 因為 google app script 會有 CORS 問題，暫時沒找到解決問題，所以再透過 express 做中介。
4. vercel 部屬上面所提 express。

## 參賽心得

在就業了一段時間使用 JS & UI Framework 後，也想試試看回歸最原始，用最基本的 javascript css 能走到哪邊，所以這次的 mission 1 特別沒有使用 vue 或者是 bootstrap 來做挑戰。

以往享受了更多前人的成果，只要簡單幾個指令載入 component 就能有彈跳視窗的效果，利用這次讓自己好好重新走一遍，彈跳視窗在功能上需要考量什麼，會踩到什麼雷，但因為時間的關係這次沒有將彈跳視窗做動態的載入，而是寫死個別呼叫，成了可以再優化的部分。

在功能面的部份，這次有捐款的相關數據和一個類似意見回收的表單，一想到最快的做法就是利用 google app script 搭配 google sheet 就可以做到捐款的部分。表單則是利用 gmail 的 api 做一個簡易的系統回傳功能，感謝大家來玩我的專案。但實作上總是會遇到想像不到的問題，再 post 回去 google 時竟然出現了 CORS 的問題，一時間也沒有找到相關的辦法排除，所以趕快再透過 vercel + express.js 做了一個中介來解決這個問題。

最後雖然這次使用的技術非常的陽春，但也算是一次鍊手的機會，遇到了很多不同的問題，也思考了多種的解決辦法，運用到了一些之前沒使用過的 plugin 以及方法，像是 lenis 以及 web api 的 MutationObserver 來做問題處理。也感謝 THE F2E 提供這次的機會練習，如果時間允許的話 Mission 2 再相會。