//generate card HTML for each member
function generateHTML(teamMember) {
  let role = "";
  let info = "";
  const email = `Email: <a href="mailto:${teamMember.email}" target="_blank"'>${teamMember.email}</a>`;

  switch (teamMember.role) {
    case "Manager":
      role = `<i class="bi bi-journals"></i> ${teamMember.role}`;
      info = `Office number : ${teamMember.officeNumber}`;
      break;
    case "Engineer":
      role = `<i class="bi bi-motherboard"></i> ${teamMember.role}`;
      info = `Github: <a href='https://www.github.com/${teamMember.github}' target="_blank">${teamMember.github}</a>`;
      break;

    case "Intern":
      role = `<i class="bi bi-mortarboard"></i> ${teamMember.role}`;
      info = `School: ${teamMember.school}`;
      break;

    default:
      role = `<i class="bi bi-person-workspace"></i> ${teamMember.role}`;

      break;
  }

  return `<div class="col">
	<div class = "card">
		<div class="card-header bg-secondary">
			<h3 class="text-center">
				<strong>${teamMember.name}</strong>
				<br>
				${role}
			</h3>
		</div>
		<div class="card-body">
				<ul class="list-group list-group-flush">
					<li class="list-group-item">ID: ${teamMember.id}</li>
					<li class="list-group-item">${email}</li>
					<li class="list-group-item">${info}</li>
				</ul>
		</div>
	</div>
</div>
`;
}

module.exports = generateHTML;
