$(document).ready(function () {
  function addNote() {
    const noteName = $("#note-name-input").val().trim();
    if (noteName) {
      const listItem = $(
        '<li class="list-group-item d-flex justify-content-between align-items-center" style="display: none;"></li>'
      );
      listItem.append($("<span></span>").text(noteName));
      listItem.append(
        '<button class="btn btn-outline-success btn-sm me-2 complete-note-btn">Complete</button>'
      );
      listItem.append(
        '<button class="btn btn-outline-danger btn-sm delete-note-btn">Delete</button>'
      );
      $("#notes-list").append(listItem);
      listItem.fadeIn();
      $("#note-name-input").val("");
    } else {
      alert("Please enter a note.");
    }
  }

  $("#add-note-btn").click(addNote);

  $("#note-name-input").keypress(function (e) {
    if (e.which == 13) {
      e.preventDefault();
      addNote();
    }
  });

  $("#notes-list").on("click", ".complete-note-btn", function () {
    const $parentLi = $(this).closest("li");
    $parentLi.toggleClass("completed-note toggle");
    if ($parentLi.hasClass("completed-note")) {
      $(this).text("Uncomplete");
    } else {
      $(this).text("Complete");
    }
  });

  $("#notes-list").on("click", ".delete-note-btn", function () {
    $(this)
      .parent()
      .fadeOut(500, function () {
        $(this).remove();
      });
  });
});

function updateDateTime() {
  const currentDate = new Date();
  $("#date").text(
    currentDate.toLocaleDateString("el-GR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  );
  $("#time").text(
    currentDate.toLocaleTimeString("el-GR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  );
}
updateDateTime();
setInterval(updateDateTime, 1000);
