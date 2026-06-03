(function () {
  var passwordHash = "7e88565880ed5d29aa88710ec308415e8b08a4469153dbc21665dd0c99cf8027";
  var storageKey = "zhongwu_preview_ok";

  function toHex(buffer) {
    return Array.from(new Uint8Array(buffer))
      .map(function (byte) { return byte.toString(16).padStart(2, "0"); })
      .join("");
  }

  async function sha256(text) {
    var data = new TextEncoder().encode(text);
    var digest = await crypto.subtle.digest("SHA-256", data);
    return toHex(digest);
  }

  function unlock() {
    var lock = document.querySelector(".protect-lock");
    if (lock) lock.remove();
    document.documentElement.style.overflow = "";
  }

  if (localStorage.getItem(storageKey) === "1") {
    return;
  }

  document.documentElement.style.overflow = "hidden";

  document.addEventListener("DOMContentLoaded", function () {
    var lock = document.createElement("div");
    lock.className = "protect-lock";
    lock.innerHTML = [
      '<div class="protect-box">',
      "<h2>预览访问</h2>",
      "<p>请输入预览密码后查看网站效果。</p>",
      '<form class="protect-row">',
      '<input type="password" autocomplete="current-password" placeholder="预览密码" aria-label="预览密码">',
      "<button type=\"submit\">进入</button>",
      "</form>",
      '<div class="protect-error" aria-live="polite"></div>',
      "</div>"
    ].join("");
    document.body.appendChild(lock);

    var form = lock.querySelector("form");
    var input = lock.querySelector("input");
    var error = lock.querySelector(".protect-error");
    input.focus();

    form.addEventListener("submit", async function (event) {
      event.preventDefault();
      var hash = await sha256(input.value);
      if (hash === passwordHash) {
        localStorage.setItem(storageKey, "1");
        unlock();
      } else {
        error.textContent = "密码不正确，请重新输入。";
        input.select();
      }
    });
  });
})();
