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
				$dob = $_POST["dob"] ;
			}

			try {
			    $bdd = new PDO('mysql:host=localhost;dbname=membres;charset=utf8', 'root', 'root');
    			$bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			} catch (Exception $e) {
				die('Erreur : '.$e->getMessage());
			}
			$bdd->exec("INSERT INTO client(nom, prenom, username, dob, sexe, cellulaire, courriel, mdp) 
						VALUES ('$nom', '$prenom', '$username', '$dob', '$sexe', '$cellulaire', '$email', '$mdp')");
			header("Location: confirmation.php");

		}

		
	}
?>