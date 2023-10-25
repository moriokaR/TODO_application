const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  // 押された削除ボタンの親タグ(li)を未完了リストから削除
  const deleteTarget = target;
  document.getElementById("incomplete-list").removeChild(deleteTarget);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  if (text) {
    // liタグ作成
    const li = document.createElement("li");

    // div生成
    const div = document.createElement("div");
    div.className = "list-row";

    // p生成
    const p = document.createElement("p");
    p.innerText = text;

    // button(完了)
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
      // 押された削除ボタンの親タグ(li)を未完了リストから削除
      deleteFromIncompleteList(completeButton.parentElement.parentElement);

      // 完了リストへ追加する要素
      const addTarget = completeButton.parentNode.parentNode;
      // TODO内容テキストを取得
      const text = addTarget.firstElementChild.firstElementChild.innerText;
      // div以下を初期化
      addTarget.firstElementChild.textContent = null;

      // p生成
      const addP = document.createElement("p");
      addP.innerText = text;

      // buttonタグ作成 戻すボタン作成
      const backButton = document.createElement("button");
      backButton.innerText = "戻す";
      backButton.addEventListener("click", () => {
        // 押された削除ボタンの親タグ(li)を未完了リストから削除
        const backTarget = backButton.parentNode.parentNode;
        document.getElementById("complete-list").removeChild(backTarget);

        // 完了TODOテキストを取得
        const backText =
          backTarget.firstElementChild.firstElementChild.innerText;

        createIncompleteList(backText);
      });

      addTarget.firstChild.appendChild(addP);
      addTarget.firstChild.appendChild(backButton);

      document.getElementById("complete-list").appendChild(addTarget);
    });

    // button(削除)
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
      // 押された削除ボタンの親タグ(li)を未完了リストから削除
      deleteFromIncompleteList(deleteButton.parentElement.parentElement);
    });

    //div要素にpを追加
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    // liへdiv追加
    li.appendChild(div);

    // 未完了リストに追加
    document.getElementById("incomplete-list").appendChild(li);
  }
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
