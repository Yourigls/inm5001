<?php

	$nom = $mdp = $prenom = $email = $username = $cellulaire = $dob = $bdd = "";

	if ($_SERVER["REQUEST_METHOD"] == "POST") {

		if ($_SERVER["REQUEST_METHOD"] == "POST") {
			$nom 		= $_POST["nom"];
			$mdp		= $_POST["mdp"];
			$email 		= $_POST["email"];
			$prenom 	= $_POST["prénom"];
			$username 	= $_POST["username"];
			$cellulaire = $_POST["num"];
			$sexe		= strtotime($_POST["sexe"]);
			if (isset($_POST["dob"])) {
				$dob = $_POST["dob"];
				echo "$dob";
			}

		}

		
	}
?>