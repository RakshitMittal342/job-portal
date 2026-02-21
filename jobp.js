document.addEventListener("DOMContentLoaded", function () {

  const addBtn = document.getElementById("addBtn");
  const searchInput = document.getElementById("searchInput");
  const jobList = document.getElementById("jobList");

  addBtn.addEventListener("click", function () {

    const title = document.getElementById("jobTitle").value.trim();
    const company = document.getElementById("jobCompany").value.trim();

    if (!title || !company) {
      alert("Please fill all fields");
      return;
    }

    const li = document.createElement("li");
    li.textContent = title + " at " + company;

    jobList.appendChild(li);

    document.getElementById("jobTitle").value = "";
    document.getElementById("jobCompany").value = "";
  });

  searchInput.addEventListener("keyup", function () {

    const filter = searchInput.value.toLowerCase();
    const jobs = jobList.getElementsByTagName("li");

    for (let i = 0; i < jobs.length; i++) {
      const text = jobs[i].textContent.toLowerCase();

      if (text.includes(filter)) {
        jobs[i].style.display = "";
      } else {
        jobs[i].style.display = "none";
      }
    }
  });

});