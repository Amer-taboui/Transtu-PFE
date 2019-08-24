package com.javainuse.repositories;

import com.javainuse.model.Ligne;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LigneRepository extends JpaRepository<Ligne, Long>{
    String queryString = "SELECT l FROM Ligne l WHERE l.numero = :numero AND l.type = :type AND l.reseau = :reseau AND l.depot = :depot";

    @Query(queryString)
    List<Ligne> customFind(@Param("numero") String numLine, @Param("type") String type, @Param("reseau") String reseau, @Param("depot") String depot);

    Optional<Ligne> findById(Long employeeId);
}
