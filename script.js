document.addEventListener('DOMContentLoaded', function () {
    // Tile click to show form
    document.getElementById('startProcessTile').addEventListener('click', function () {
        document.getElementById('formSection').classList.remove('hidden');
        document.getElementById('result').classList.add('hidden');
        document.getElementById('candidateForm').reset();
        document.getElementById('interestDescription').textContent = '';
    });

    // Reset button
    document.getElementById('resetBtn').addEventListener('click', function () {
        document.getElementById('candidateForm').reset();
        document.getElementById('result').classList.add('hidden');
        document.getElementById('interestDescription').textContent = '';
    });

    // Try Again button
    document.getElementById('tryAgainBtn').addEventListener('click', function () {
        document.getElementById('formSection').classList.remove('hidden');
        document.getElementById('result').classList.add('hidden');
        document.getElementById('candidateForm').reset();
        document.getElementById('interestDescription').textContent = '';
    });

    // Interest dropdown
    document.getElementById('interest').addEventListener('change', function () {
        showInterestDescription();
    });

    // Form submit
    document.getElementById('candidateForm').addEventListener('submit', function (e) {
        e.preventDefault();
        routeCandidate();
    });
});

function toggleForm() {
    document.getElementById('formSection').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');
    document.getElementById('candidateForm').reset();
}

function resetForm() {
    document.getElementById('candidateForm').reset();
    document.getElementById('result').classList.add('hidden');
}

function tryAgain() {
    document.getElementById('formSection').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');
    document.getElementById('candidateForm').reset();
}

function showInterestDescription() {
    const descriptions = {
        strategy: 'Lead business planning, market analysis, and high-level decision making.',
        operations: 'Manage day-to-day processes, optimize workflows, and ensure smooth execution.',
        tech: 'Design, develop, and implement technical solutions and innovations.'
    };
    const select = document.getElementById('interest');
    const desc = document.getElementById('interestDescription');
    desc.textContent = descriptions[select.value] || '';
}

function routeCandidate() {
    const name = document.getElementById('name').value.trim();
    const experience = parseInt(document.getElementById('experience').value, 10);
    const interest = document.getElementById('interest').value;
    let team = '';
    if (!name || isNaN(experience) || !interest) {
        alert('Please fill all fields.');
        return false;
    }
    if (experience >= 5 && interest === 'strategy') {
        team = 'Strategy';
    } else if (experience >= 3 && interest === 'operations') {
        team = 'Operations';
    } else {
        team = 'Technology';
    }
    document.getElementById('resultText').innerText = `Thank you, ${name}. A person from the ${team} team will contact you soon.`;
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('formSection').classList.add('hidden');
    return false;
}
