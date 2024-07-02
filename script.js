document.addEventListener("DOMContentLoaded", () => {
    const users = [
        { no: 1, name: 'Ahmed Khan', fatherName: 'Mohammad Ali Khan', rollNumber: '101' },
        { no: 2, name: 'Ayesha Siddiqui', fatherName: 'Omar Siddiqui', rollNumber: '102' },
        { no: 3, name: 'Zainab Bukhari', fatherName: 'Faisal Bukhari', rollNumber: '103' },
        { no: 4, name: 'Hamza Sheikh', fatherName: 'Imran Sheikh', rollNumber: '104' },
        { no: 5, name: 'Fatima Raza', fatherName: 'Hussain Raza', rollNumber: '105' },
        { no: 6, name: 'Ali Abbas', fatherName: 'Mustafa Abbas', rollNumber: '106' },
        { no: 7, name: 'Maryam Jafari', fatherName: 'Javed Jafari', rollNumber: '107' },
        { no: 8, name: 'Bilal Ahmed', fatherName: 'Farooq Ahmed', rollNumber: '108' },
        { no: 9, name: 'Sana Ansari', fatherName: 'Nasir Ansari', rollNumber: '109' },
        { no: 10, name: 'Usman Qureshi', fatherName: 'Salman Qureshi', rollNumber: '110' },
        { no: 11, name: 'Sara Malik', fatherName: 'Asad Malik', rollNumber: '111' },
        { no: 12, name: 'Yusuf Hamidi', fatherName: 'Kamal Hamidi', rollNumber: '112' },
        { no: 13, name: 'Amna Siddiqui', fatherName: 'Hassan Siddiqui', rollNumber: '113' },
        { no: 14, name: 'Ibrahim Mirza', fatherName: 'Azhar Mirza', rollNumber: '114' },
        { no: 15, name: 'Noor Hasan', fatherName: 'Zubair Hasan', rollNumber: '115' },
        { no: 16, name: 'Hassan Ali', fatherName: 'Murtaza Ali', rollNumber: '116' },
        { no: 17, name: 'Sami Shah', fatherName: 'Rashid Shah', rollNumber: '117' },
        { no: 18, name: 'Rania Tariq', fatherName: 'Akram Tariq', rollNumber: '118' },
        { no: 19, name: 'Zaid Khan', fatherName: 'Mahmood Khan', rollNumber: '119' },
        { no: 20, name: 'Nadia Farooq', fatherName: 'Yasin Farooq', rollNumber: '120' },
        { no: 21, name: 'Saif Ahmed', fatherName: 'Zahid Ahmed', rollNumber: '121' },
        { no: 22, name: 'Laila Hassan', fatherName: 'Adnan Hassan', rollNumber: '122' },
        { no: 23, name: 'Omar Iqbal', fatherName: 'Tariq Iqbal', rollNumber: '123' },
        { no: 24, name: 'Hiba Nasir', fatherName: 'Irfan Nasir', rollNumber: '124' },
        { no: 25, name: 'Iman Raza', fatherName: 'Rizwan Raza', rollNumber: '125' }
    ];

    let present = 0;
    let absent = 0;
    let leave = 0;

    const present_html = document.getElementById("present");
    const absent_html = document.getElementById("absent");
    const leave_html = document.getElementById("leave");
    const list = document.getElementById("user-list");

    users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.no}</td>
            <td>${user.name}</td>
            <td>${user.fatherName}</td>
            <td>${user.rollNumber}</td>
            <td>
                <label>
                    <input onchange="updateStatus(this, ${index}, 'Present')" type="radio" name="attendance${index}" value="Present" />
                    Present
                </label>
            </td>
            <td>
                <label>
                    <input onchange="updateStatus(this, ${index}, 'Absent')" type="radio" name="attendance${index}" value="Absent" />
                    Absent
                </label>
            </td>
            <td>
                <label>
                    <input onchange="updateStatus(this, ${index}, 'Leave')" type="radio" name="attendance${index}" value="Leave" />
                    Leave
                </label>
            </td>
        `;
        list.appendChild(row);
    });

    window.updateStatus = function(ele, index, status) {
        const radioButtons = document.getElementsByName(`attendance${index}`);
        const row = ele.closest('tr');

        radioButtons.forEach(button => {
            if (button !== ele) {
                button.disabled = true;
            }
        });

        row.classList.remove('present', 'absent', 'leave');

        switch (status) {
            case "Present":
                present++;
                present_html.innerText = present;
                row.classList.add('present');
                break;
            case "Absent":
                absent++;
                absent_html.innerText = absent;
                row.classList.add('absent');
                break;
            case "Leave":
                leave++;
                leave_html.innerText = leave;
                row.classList.add('leave');
                break;
            default:
                break;
        }
    }
});
