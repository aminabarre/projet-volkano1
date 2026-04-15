function toggleSidebar() {
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('overlay');
      sidebar.classList.toggle('-translate-x-full');
      overlay.classList.toggle('hidden');
    }

    // Modal
    function openModal() {
      const modal = document.getElementById('modal');
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      const modal = document.getElementById('modal');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.style.overflow = '';
    }

    // Fermer si on clique sur le fond
    document.getElementById('modal').addEventListener('click', function(e) {
      if (e.target === this) closeModal();
    });

    // Preview photo
    function previewPhoto(event) {
      const file = event.target.files[0];
      if (!file) return;
      const preview = document.getElementById('photoPreview');
      const dropzone = document.getElementById('dropzone');
      preview.src = URL.createObjectURL(file);
      preview.classList.remove('hidden');
      dropzone.classList.add('hidden');
    }

    // Enregistrer
    function enregistrerHotel() {
      const nom = document.getElementById('hotelNom').value.trim();
      const adresse = document.getElementById('hotelAdresse').value.trim();
      const email = document.getElementById('hotelEmail').value.trim();
      const tel = document.getElementById('hotelTel').value.trim();
      const prix = document.getElementById('hotelPrix').value.trim();
      const erreur = document.getElementById('modalError');

      erreur.classList.add('hidden');

      if (!nom || !adresse || !email || !tel || !prix) {
        erreur.textContent = 'Veuillez remplir tous les champs.';
        erreur.classList.remove('hidden');
        return;
      }

      // Ici tu ajouteras la logique Firebase plus tard
      alert(`Hôtel "${nom}" enregistré avec succès !`);
      closeModal();
    }